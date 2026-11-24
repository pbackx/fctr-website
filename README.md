# FCTR.be Website

Static [Jekyll](https://jekyllrb.com/) website for [fctr.be](https://www.fctr.be), hosted via GitHub Pages.

## Local Development

### 1. Prerequisites (Ubuntu / Debian)

Install Ruby development headers and native libraries required to compile the gems in `Gemfile.lock` (`openssl`, `ffi`, `nokogiri`, etc.):

```bash
sudo apt update
sudo apt install -y build-essential ruby-dev zlib1g-dev libssl-dev libffi-dev
```

### 2. Run with Bundler (recommended — matches GitHub Pages)

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open **http://localhost:4000/** in your browser.

### Quick Alternative (without Bundler)

If `jekyll` is already installed globally on your machine and you want to preview the site without installing the full `github-pages` bundle:

```bash
JEKYLL_NO_BUNDLER_REQUIRE=true jekyll serve --livereload
```

### Building Without Serving

```bash
bundle exec jekyll build
# or without Bundler:
JEKYLL_NO_BUNDLER_REQUIRE=true jekyll build
```

> **Note:** Changes to `_config.yml` are not picked up automatically by `--livereload` — restart `jekyll serve` after editing it.
