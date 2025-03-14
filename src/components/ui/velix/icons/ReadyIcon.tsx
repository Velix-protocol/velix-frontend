import { cn } from '@/utils/utils';
import { ComponentProps } from 'react';


export default function ReadyIcon(props: ComponentProps<'svg'>) {
 return (
   <svg
     className={cn("fill-current",(props.className))}
     width="9"
     height="9"
     viewBox="0 0 9 9"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     {...props}
   >
     <path
       d="M4.5 0.75C2.43 0.75 0.75 2.43 0.75 4.5C0.75 6.57 2.43 8.25 4.5 8.25C6.57 8.25 8.25 6.57 8.25 4.5C8.25 2.43 6.57 0.75 4.5 0.75ZM3.75 6.375L1.875 4.5L2.40375 3.97125L3.75 5.31375L6.59625 2.4675L7.125 3L3.75 6.375Z"
     />
   </svg>
 );
}
