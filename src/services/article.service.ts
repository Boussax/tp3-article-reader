import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/interfaces/IArticle';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    constructor(private httpService: HttpClient) {}

    getAllArticles(): Observable<IArticle[]> {
        return this.httpService.get<Array<IArticle>>(
            'https://jsonplaceholder.typicode.com/posts'
        );
    }

    getArticleById(id: number): Observable<IArticle> {
        return this.httpService.get<IArticle>(
            'https://jsonplaceholder.typicode.com/posts/' + id
        );
    }

    addArticle(newArticle: string) : Observable<IArticle> {
        console.log('article service -> addArticle : \n'+newArticle);
        return this.httpService.post<IArticle>('https://jsonplaceholder.typicode.com/posts',newArticle);
    }

    deleteArticleById(id: number) {
        this.httpService.delete<IArticle>(
            'https://jsonplaceholder.typicode.com/posts/' + id
        );
    }
}
