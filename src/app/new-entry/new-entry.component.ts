import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from 'src/services/article.service';
import { IArticle } from '../interfaces/IArticle';

@Component({
    selector: 'app-new-entry',
    templateUrl: './new-entry.component.html',
    styleUrls: ['./new-entry.component.css'],
})
export class NewEntryComponent implements OnInit {
    @Input() isDisplayed: boolean = false;
    @Output() newArticleCreated = new EventEmitter();

    constructor(private articleService: ArticleService) {}

    ngOnInit(): void {}

    onSubmit(f: NgForm) {
        let newArticle : IArticle = f.value;
        console.log('hehehehehe ');
        console.log(newArticle);
        newArticle.id=101;
        newArticle.userId=20;
        this.articleService.addArticle(f.value).subscribe((data) => {

            this.newArticleCreated.emit(newArticle);
        });
    }
}
