import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MemberService {
    configUrl = 'http://localhost:57298/api/values';
    constructor(private http:HttpClient){}

    getMembers(){
        return this.http.get(this.configUrl);
    }
}