import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
class ShyftApiService {
    private readonly _httpClient = inject(HttpClient);
    private readonly _header = { 'x-api-key': '773DT6pUIKFQSCob' };
    private readonly _mint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';

    getAccount(publicKey: string | undefined | null) {
        if (!publicKey) {
            return of(null);
        }
        const url = new URL('https://devnet-rpc.shyft.to?api_key=773DT6pUIKFQSCob');
        url.searchParams.set('network', 'mainnet-beta');
        url.searchParams.set('wallet', publicKey);
        url.searchParams.set('token', this._mint);

        return this._httpClient
            .get<{
                result: { balance: number; info: { image: string } }
            }>(url.toString(), { headers: this._header })
            .pipe(map((response) => response.result));
    }
} 