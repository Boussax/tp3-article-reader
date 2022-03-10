import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../interfaces/IArticle';
import { ArticleService } from 'src/services/article.service';

@Component({
    selector: 'app-article-reader',
    templateUrl: './article-reader.component.html',
    styleUrls: ['./article-reader.component.css'],
})
export class ArticleReaderComponent implements OnInit {
    articleList: Array<IArticle> = [];
    displayFullArticle: boolean = false;
    selectedId : number = 0;

    constructor(private articleService: ArticleService) {}

    ngOnInit(): void {
        this.articleService.getAllArticles().subscribe((data) => {
            this.articleList = data;
        });
    }

    openArticle(id : number) {
        this.displayFullArticle = true;
        this.selectedId = id;
        console.log('to open : selected id : '+ this.selectedId + ', isDisplayed = ' + this.displayFullArticle);
    }

    closeArticle() {
        console.log('to close : selected id : '+ this.selectedId + ', isDisplayed = ' + this.displayFullArticle);
        this.displayFullArticle = false;
        this.selectedId = 0;
        console.log('once closed : selected id : '+ this.selectedId + ', isDisplayed = ' + this.displayFullArticle);

    }
}
