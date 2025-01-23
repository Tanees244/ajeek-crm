import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  get<T>(feature: FeatureKey, subFeature: string, endpoint: string) {
    const url = `${this.constructUrl(feature, subFeature)}/${endpoint}`;
    return this.http.get<T>(url);
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
