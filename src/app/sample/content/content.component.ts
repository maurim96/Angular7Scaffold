import { Content } from 'src/app/models/content';
import { ContentService } from '../../core/services/content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  constructor(
      private _contentService: ContentService
  ) { }

  content: Content[];

  ngOnInit() {
    this.fetchContent();
  }

  fetchContent() {    
    this._contentService.getAllContents().subscribe(res => {
      this.content = res;
    })  
  }

}
