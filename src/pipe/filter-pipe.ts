import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: { keys: any[]; value: any }): any {
    console.group(arg.value);
    if (arg.value) {
      return value.filter((item: any): any => {
        for (const key of arg.keys as any) {
          if (
            String(item?.[key] ?? '')
              .toLowerCase()
              .includes(String(arg.value ?? '').toLowerCase())
          )
            return true;
        }
      });
    } else {
      return value;
    }
  }
}
