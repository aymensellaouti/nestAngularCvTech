import { Pipe, PipeTransform } from '@angular/core';
const defaultPath = 'cv.png';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if (path.trim().length === 0) {
      return defaultPath;
    }
    return path;
  }

}
