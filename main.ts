import { LikeComponent } from './like.component'

let component = new LikeComponent(0, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected} `)
