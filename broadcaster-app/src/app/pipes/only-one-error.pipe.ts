import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'OnlyOneErrorPipe',
  standalone: true
})
export class OnlyOneErrorPipe implements PipeTransform {

  transform(allErrors: any, errorsPriority: string[]): any {

    if (!allErrors) {
      return null;
    }
    const onlyOneError: any = {};

    for (let error of errorsPriority) {
      if (allErrors[error]) {
        onlyOneError[error] = allErrors[error];
        break;
      }
    }

    return onlyOneError;
    console.log(onlyOneError);
  }
}