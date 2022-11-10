import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipePipe implements PipeTransform {

  transform(value: string, character: string): unknown {
    return value.replace(character, " ");
  }

}
