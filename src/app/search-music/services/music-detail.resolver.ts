import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError, first, map, Observable, tap } from "rxjs";
import { Isongs } from "../../home/Dto search/songs";
import { BackOfficeService } from "../../shared-services/backoffice.service";

/*@Injectable()*/
//export class MusicDetailResolver implements Resolve<Isongs[]>{

  //constructor(private backoffice: BackOfficeService) { }

 
    //resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable < Isongs[] > {


    //const songSeq = route.paramMap.get("songSeq");

    //return this.backoffice.loadAllCourses(songSeq)
    //  .pipe(
    //    tap(val => console.log("value of resolver"+val)
    //    ),
    //    first()
    //  )
  
  
  
//}
