import { NewsService } from './../services/news/news.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: any;
  params: any = { tags: 'front_page' };
  newsList: any = [];
  page: any = 0;
  hitsPerPage: any = 20;
  numberOfPages: any;
  constructor(private store: Store<{ todos: Todo[] }>, private newsService: NewsService) {
    store.pipe(select('todos')).subscribe(values => {
      this.todos = values;
    });
  }

  ngOnInit(): void {
    this.getNews();
  }


  getNews() {
    this.params.page = this.page;
    this.params.hitsPerPage = this.hitsPerPage;
    this.newsService.getNews(this.params).subscribe(news => {
      this.newsList = news;
      this.numberOfPages = news.nbPages;
    })
  }

  nextPage() {
    this.page += 1;
    this.getNews();
  }

  backPage() {
    this.page -= 1;
    this.getNews();
  }

}
