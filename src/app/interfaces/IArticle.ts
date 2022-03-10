export interface IArticle {
    userId: number;
    id: number;
    title: string;
    subtitle: string;
    body: string;
    author ?: string;
    illustrationURL ?: string;
}
