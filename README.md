## List of Japanese Prefectures

The list of prefectures is manually generated from these pages
https://en.wikipedia.org/wiki/ISO_3166-2:JP
http://www.statoids.com/ujp.html

The latest census data (2015) can be found here, it's not included in the data
https://www.e-stat.go.jp/en/stat-search/files?page=1&toukei=00200521&tstat=000001080615&result_page=1&second=1


### Usage

Just grab the file `prefectures.json` it has a list of objects with the structure

```json
{
  "iso": "01",
  "prefecture_kanji": "北海道",
  "prefecture_kana": "ほっかいどう",
  "prefecture_romaji": "Hokkaido"
}
```

The `prefecture_name` in romaji will include one of the possible denomination `Ken`, `To`, `Fu`.

## Related links

More [open data repositories](https://github.com/piuccio?utf8=%E2%9C%93&tab=repositories&q=open-data-jp&type=&language=).

You can also find a list of all GeoJSON prefectures on [this repository](https://github.com/dataofjapan/land).
