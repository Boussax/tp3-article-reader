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
    selectedArticles: Array<number> = [];
    displayFullArticle: boolean = false;
    selectedId : number = 0;

    constructor(private articleService: ArticleService) {}

    ngOnInit(): void {
        this.articleList=[];
        this.selectedArticles=[];
        this.articleService.getAllArticles().subscribe((data) => {
            this.articleList = data;
            for (let i in this.articleList) {
                this.selectedArticles.push(0);
            }
        });
    }

    openArticle(id : number) {
        this.displayFullArticle = true;
        this.selectedId = id;
    }

    closeArticle() {
        this.displayFullArticle = false;
        this.selectedId = 0;
    }

    articleAdded(newArticle: IArticle){
        this.articleList.push(newArticle);
        console.log(this.articleList);
    }

    selectArticle(index:number) {
        if (this.selectedArticles[index]==0){
            this.selectedArticles[index] = 1;
        } else {
            this.selectedArticles[index] = 0;
        }
        console.log(this.selectedArticles);
    }

    delSelectedArticles(){
        for (let i in this.selectedArticles) {
            if (this.selectedArticles[i] == 1) {
                this.articleService.deleteArticleById(this.articleList[i].id);
            }
        }
        this.ngOnInit();
    }
}
