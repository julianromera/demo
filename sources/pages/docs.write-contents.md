Write Generic Contents
======================

---  

this page explain file types, meta file and inline meta informations.

also explain meta keys shared between pages and articles.

---

With _PoliteJS_ you create your **website's pages** or **blog's articles** by writing simple text files. _PoliteJS_ recognises by default _Markdown_ and _HTML_ text files.

## Content Source File

A content source file name represent two informations:

- web page url
- source language

```
{web-page-url}.{source-language}

// page example
docs.write-contents.md
-> http://example.com/docs/write-contents/

// blog entry example
2013-11-13.on-the-road-again.md
-> http://example.com/2013/11/on-the-road-again/
```

> Writing _pages_ or _articles_ is almost the same action, there are very few difference regarding  file names and storage folder.

## Meta Informations

Both _pages_ and _articles_ often needs much more informations than a simple _url based title_. 

> You may want to declare the author of the article or some very custom _SEO settings_ for a page.

You can provide additional informations with a **meta file** placed beside the content source file or with an **inline meta informations** block placed within your contents.



