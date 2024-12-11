import { Observable, of } from "rxjs";

export function createHttpObservable(url: string) {
  return of((observer:any) =>
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(body => {
        observer.next(body);
        observer.complete();
      })
      .catch(err => {
        observer.error(err);
      })
  );
}

