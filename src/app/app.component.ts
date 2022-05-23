import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private Http:HttpClient,private service:BackendService)
  {}
  title = 'demo';
  bb = true;
  xb =false;
status = 'Enable'; 
dataFromBackend:any=[];
actualdata=[];
name:any=[];
price:any=[];
volume:any=[];
cir:any=[];
day7:any=[];
hr24:any=[];
marketcap:any=[];
endpint:any=[];
n:any;
p:any;
data=[]
daynight() {
    this.bb= !this.bb;
    this.status = this.bb ? 'Day' : 'Night';
}
imageObject = [{
  image: 'assets/k.png',
  thumbImage: 'assets/k.png',
  title: 'Crypto Deep Dive'
}, {
  image: 'assets/t.png',
  thumbImage: 'assets/t.png',
  title: 'The Capital'
}, {
  image: 'assets/p.png',
  thumbImage: 'assets/p.png',
  title: 'Crypto News'
},{
  image: 'assets/e.png',
  thumbImage: 'assets/e.png',
  title: 'Learn and Earn'
}, {
  image: 'assets/s.png',
  thumbImage: 'assets/s.png',
  title: 'Free Airdrop'
}, {
  image: 'assets/s-r.png',
  thumbImage: 'assets/s-r.png',
  title: 'Self Reporting'
},
{
image: 'assets/po.png',
thumbImage: 'assets/po.png',
title: 'Coin MarketCap Portfolio'
},
{
  image: 'assets/api.png',
  thumbImage: 'assets/api.png',
  title: 'Api Sponsorship'
}
];

show()
{
  this.xb=true;
}

getData()
{
this.service.getData().subscribe(
  res=>{
    this.dataFromBackend.push(res);
    this.actualdata=this.dataFromBackend[0];
    console.log(this.actualdata);
    for (let row in this.actualdata)
    {
      for (let j in this.actualdata[row])
      {
        this.name.push(this.actualdata[row][j]['name'])
        this.volume.push(this.actualdata[row][j]['volume'])
        this.marketcap.push(this.actualdata[row][j]['MarketCap'])
        this.cir.push(this.actualdata[row][j]['CirculatingSupply'])
        this.price.push(this.actualdata[row][j]['price'])
        this.day7.push(this.actualdata[row][j]['days7'])
        this.hr24.push(this.actualdata[row][j]['hour24'])
      }
    }
  }
)  
  
}
ngOnInit() {

  this.getData();
}
}



