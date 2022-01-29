import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit ,AfterViewInit{
  active=false;

 @ViewChild('testEleRef') testEl!:ElementRef; 
@ViewChildren('testclass') collectionOfEl !:QueryList<ElementRef>;
// @ViewChildren('.testclass') collectionOfEl !:QueryList<'.testclass'>;
  constructor() { 
   
  }

  ngOnInit(): void {
  }
 ngAfterViewInit(): void {     
    //  console.log(this.testEl.nativeElement );
    //  console.log((this.testEl.nativeElement as HTMLDivElement).id);
    //  console.log(this.collectionOfEl.first.nativeElement)
    // console.log(this.collectionOfEl.get(1)?.nativeElement.innerHtml)
(this.testEl.nativeElement as HTMLDivElement).style.color="white";
(this.testEl.nativeElement as HTMLDivElement).style.backgroundColor="green";
 }
  










  title="hello";
  cars=["Fiat","Lancer","KIA","Optera"];
  date=new Date();
  image=["../../assets/1.jpg","../../assets/2.jpg","../../assets/3.jpg"]
  c=0;
  s:any;
  
  start(){
     this.s=setInterval(()=>{
      this.image[this.c];
      this.c++;
      if(this.c==3){
        this.c=0
      }
    },1000)
  }
  stop(){
clearInterval(this.s);
  }
std:Student[]=[
  new Student(100,"aya",23),
  new Student(200,"amany",30),
  new Student(300,"omar",18),
  new Student(400,"aly",23),
]
data:Student=new Student(500,"gamal",60);
  saveData(){
    this.std.push(new Student(this.data.id,this.data.name,this.data.age));
  }
DeleteEelement(id:number){
  let index=this.std.findIndex(ele=>ele.id===id)
this.std.splice(index,1)
// for(let i=0;i<this.std.length;i++){
//   if(this.std[i].id===id){
//     this.std.splice(i,1)
//   }
// }
} 
update(id:number){
  let index=this.std.findIndex(ele=>ele.id===id);
  this.std[index].id=this.data.id;
  this.std[index].name=this.data.name;
  this.std[index].age=this.data.age;
}

}

class Student{
  id:number;
  name:string
  age:number

  constructor(id:number,name:string,age:number){
    this.id=id,
    this.name=name,
    this.age=age
  }
}