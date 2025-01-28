import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

type FeatureKey = keyof typeof environment.baseUrls;

@Injectable({
  providedIn: 'root',
})
export class BaseApiService {
  constructor(private http: HttpClient) { }

  getBaseUrl(feature: FeatureKey): string {
    return environment.baseUrls[feature];
  }

  constructUrl(feature: FeatureKey, subFeature: string): string {
    return `${this.getBaseUrl(feature)}/${subFeature}`;
  }

  get<T>(
    feature: FeatureKey,
    subFeature: string,
    endpoint: string,
    options?: { params?: Record<string, string>; pathVariables?: Record<string, string> }
  ) {
    // Replace path variables in the endpoint if provided
    if (options?.pathVariables) {
      for (const key of Object.keys(options.pathVariables)) {
        endpoint = endpoint.replace(`{${key}}`, options.pathVariables[key]);
      }
    }

    const url = `${this.constructUrl(feature, subFeature)}/${endpoint}`;

    // Set query parameters if provided
    let httpParams = new HttpParams();
    if (options?.params) {
      for (const key of Object.keys(options.params)) {
        httpParams = httpParams.set(key, options.params[key]);
      }
    }

    return this.http.get<T>(url, { params: httpParams });
  }


  post<T>(feature: FeatureKey, subFeature: string, endpoint: string, body: any) {
    const url = `${this.constructUrl(feature, subFeature)}/${endpoint}`;
    return this.http.post<T>(url, body);
  }

  put<T>(feature: FeatureKey, subFeature: string, endpoint: string, body: any) {
    const url = `${this.constructUrl(feature, subFeature)}/${endpoint}`;
    return this.http.put<T>(url, body);
  }

  delete<T>(feature: FeatureKey, subFeature: string, endpoint: string) {
    const url = `${this.constructUrl(feature, subFeature)}/${endpoint}`;
    return this.http.delete<T>(url);
  }
}
