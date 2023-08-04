import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  model:string="";
  brand:string="";
  price:string="";
  feature:string="";
  warantee:string="";


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("name",this.name);
    uploadImageData.append("model",this.model);
    uploadImageData.append("brand",this.brand);
    uploadImageData.append("price",this.price);
    uploadImageData.append("feature",this.feature);
    uploadImageData.append("warantee",this.warantee);
    
    

    let res =this.http.post("http://localhost:1235/carapp/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.name="";
        this.model="";
        this.brand="";
        this.price="";
        this.feature="";
        this.warantee="";
        
      }
    );

  }

}
