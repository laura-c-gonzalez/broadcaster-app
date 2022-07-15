import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Isongs } from "../../home/Dto search/songs";
import { BackOfficeService } from "../../shared-services/backoffice.service";

@Injectable()
export class MusicDetailResolver implements Resolve<Isongs>{

  constructor(private backoffice: BackOfficeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Isongs | Observable<Isongs> {

      const musicUrl = route.paramMap.get("music/:musicNo");

      return this.backoffice.loadMusicDetail(musicUrl);
    }
  
}
