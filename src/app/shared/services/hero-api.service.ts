import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const MARVEL_GATEWAY = 'https://gateway.marvel.com:443';

@Injectable({
    providedIn: 'root',
})
export class HeroApiService {
    constructor(private http: HttpClient) {}

    private totalBS = new BehaviorSubject(0);

    total$ = this.totalBS.asObservable();

    heroes$ = of(false).pipe(
        switchMap(() => {
            const params: any = {
                apikey: environment.MARVEL_API.PUBLIC_KEY,
                offset: 0,
                limit: 40,
            };

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
}
