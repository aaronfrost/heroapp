import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const MARVEL_GATEWAY = 'https://gateway.marvel.com:443';

const LIMIT_LOW = 25;
const LIMIT_MID = 50;
const LIMIT_HIGH = 100;
export const LIMITS = [LIMIT_LOW, LIMIT_MID, LIMIT_HIGH];

@Injectable({
    providedIn: 'root',
})
export class HeroApiService {
    constructor(private http: HttpClient) {}

    private totalBS = new BehaviorSubject(0);
    private pageBS = new BehaviorSubject(0);
    private limitBS = new BehaviorSubject(LIMIT_LOW);
    private startsWithBS = new BehaviorSubject('');

    total$ = this.totalBS.asObservable();
    page$ = this.pageBS.asObservable();
    limit$ = this.limitBS.asObservable().pipe(distinctUntilChanged());
    totalPages$ = combineLatest(this.total$, this.limit$).pipe(
        map(([total, limit]) => Math.ceil(total / limit)),
    );
    isLastPage$ = combineLatest(this.totalPages$, this.page$).pipe(
        map(([totalPages, page]) => totalPages === page + 1),
    );
    startsWith$ = this.startsWithBS.asObservable();

    heroes$ = combineLatest(this.page$, this.limit$, this.startsWith$).pipe(
        map(([page, limit, startsWith]) => {
            const params: any = {
                apikey: environment.MARVEL_API.PUBLIC_KEY,
                offset: page * limit,
                limit: limit,
            };

            // Only add if exists, otherwise error on server
            if (startsWith) {
                params.nameStartsWith = startsWith;
            }

            return params;
        }),
        switchMap((params) => {
            // @ts-ignore
            return this.http.get(`${MARVEL_GATEWAY}/v1/public/characters`, {
                params,
            });
        }),
        tap((res: any) => {
            console.log(res);
            this.totalBS.next(res.data.total);
        }),
        map((res: any) => res.data.results),
        shareReplay(1),
    );

    shiftPage(num) {
        this.page$
            .pipe(
                take(1),
                tap((page) => {
                    const newPage = page + num;
                    if (newPage < 0) return;

                    this.pageBS.next(newPage);
                }),
            )
            .subscribe();
    }

    setLimit(num) {
        this.limitBS.next(num);
    }

    setStartsWith(text) {
        this.startsWithBS.next(text);
    }
}
