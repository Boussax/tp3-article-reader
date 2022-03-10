import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import { IArticle } from '../interfaces/IArticle';

@Component({
    selector: 'app-article-display',
    templateUrl: './article-display.component.html',
    styleUrls: ['./article-display.component.css'],
})
export class ArticleDisplayComponent implements OnInit {
    @Input() id: number = 0;
    @Input() listSize: number = 0;
    @Input() isDisplayed: boolean = false;
    @Output() closeArticleEvent = new EventEmitter<boolean>();
    article?: IArticle;

    constructor(private articleService: ArticleService) {}

    ngOnInit(): void {
        console.log(
            'display component started, with id, isDisplayed =' +
                this.id +
                ' ' +
                this.isDisplayed
        );
        this.articleService.getArticleById(this.id).subscribe((data) => {
            this.article = data;
        });
    }

    closeArticle() {
        this.isDisplayed = false;
        this.closeArticleEvent.emit(false);
    }

    previousArticle() {
        console.log('previous');
        if (this.id > 0) {
            this.id--;
            this.ngOnInit();
        }
    }

    nextArticle() {
        console.log('next');
        if (this.id < this.listSize) {
            this.id++;
            this.ngOnInit();
        }
    }
}
