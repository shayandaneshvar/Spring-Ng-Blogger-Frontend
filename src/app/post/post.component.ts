import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AddPostService} from '../add-post/add-post.service';
import {PostPayload} from '../add-post/post-payload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  permLink: number;
  post: PostPayload;

  constructor(private router: ActivatedRoute, private postService: AddPostService) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.permLink = params.id;
    });

    this.postService.getPost(this.permLink)
      .subscribe((data: PostPayload) => {
        this.post = data;
      }, error => console.log('failure Response'));
  }

}
