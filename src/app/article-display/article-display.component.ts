import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import { IArticle } from '../interfaces/IArticle';

@Component({
    selector: 'app-article-display',
    templateUrl: './article-display.component.html',
    styleUrls: ['./article-display.component.css'],
})
export class ArticleDisplayComponent implements OnInit, AfterViewInit {
    @Input() id: number = 0;
    @Input() listSize: number = 0;
    @Input() isDisplayed: boolean = false;
    @Output() closeArticleEvent = new EventEmitter<boolean>();
    article?: IArticle;

    constructor(private articleService: ArticleService, private elementRef: ElementRef) {}

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

    ngAfterViewInit(){
        this.elementRef.nativeElement.focus();
    }

    closeArticle() {
        this.isDisplayed = false;
        this.closeArticleEvent.emit(false);
    }

    previousArticle() {
        console.log('previous');
        this.id--;
        this.ngOnInit();
    }

    nextArticle() {
        console.log('next');
        this.id++;
        this.ngOnInit();
    }

    printComment(){
        console.log('this is my comment');
    }
}
