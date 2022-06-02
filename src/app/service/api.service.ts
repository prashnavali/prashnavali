import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from './toastr.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiEndPoint = environment.apiEndpoint;

    constructor(private http: HttpClient, private toastr: ToastrService) {
    }

    // Post Method
    httpPost(url: any, reqData: any) {
        return this.http.post(`${this.apiEndPoint}${url}`, reqData)
            .pipe(
                map((res: any) => {
                    const resData: { err: any, data: any } = res;
                    return resData;
                }),
                catchError((err: any) => {
                    if (err.status === 409) {
                        this.toastr.open('warning', `WARNING-${err.status}`, err.error.data);
                        return throwError(err)
                    } else {
                        this.toastr.open('error', `ERROR-${err.status}`, err.statusText);
                        return throwError(err)
                    }
                })
            )
    };

    httpPut(url: any, reqData: any) {
        return this.http.put(`${this.apiEndPoint}${url}`, reqData)
            .pipe(
                map((res: any) => {
                    const resData: { err: any, data: any } = res;
                    return resData;
                }),
                catchError((err: any) => {
                    if (err.status === 409) {
                        this.toastr.open('warning', `WARNING-${err.status}`, err.error.data);
                        return throwError(err)
                    } else {
                        this.toastr.open('error', `ERROR-${err.status}`, err.statusText);
                        return throwError(err)
                    }
                })
            )
    };

    // Get Method
    httpGet(url: any) {
        return this.http.get(`${this.apiEndPoint}${url}`)
            .pipe(
                map((res: any) => {
                    const resData: { err: any, data: any } = res;
                    return resData;
                }),
                catchError((err: any) => {
                    this.toastr.open('error', `ERROR-${err.status}`, err.statusText);
                    return throwError(err)
                })
            )
    };
}
