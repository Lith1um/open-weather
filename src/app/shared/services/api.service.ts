import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class ApiService {

  constructor(
    protected http: HttpClient,
    protected baseUrl: string,
    protected apiKey?: string) {}

  protected get(path: string, params: HttpParams): Observable<any> {
    const query = params.toString();
    // append an apiKey if needed
    if (this.apiKey) {
      params = params.append('appid', this.apiKey);
    }

    return this.http.get(`${this.baseUrl}/${path}`, { params }).pipe(
      tap(() => {
        const requestUrl = query.length > 0
          ? `${this.baseUrl}/${path}?${query}`
          : `${this.baseUrl}/${path}`
        console.log(`GET: ${requestUrl}`);
      })
    );
  }
  
}