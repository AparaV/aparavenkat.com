# Personal Website

This is the source code for my website. It is a work in progress

Uses the Jekyll [Hyde](https://github.com/poole/hyde) theme.

To run locally, clone repo and:
```shell
$ jekyll serve
```
Then go to [localhost:4000](localhost:4000) on your browser.

The resume is served from another [repo](https://github.com/AparaV/resume). So to make sure you have the latest version, run the following command and commit:
```shell
$ git submodule update --remote --merge
$ git add .
$ git commit -m "<your commit message>"
```
