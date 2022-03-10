import { Component, Input, OnInit } from '@angular/core';
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

    constructor(private articleService: ArticleService) {}

    ngOnInit(): void {}

    onSubmit(f: NgForm) {
        console.log(JSON.stringify(f.value));
        this.articleService.addArticle(JSON.stringify(f.value)).subscribe((data) => {
            console.log(data);
        });
    }
}
