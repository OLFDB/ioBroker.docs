![Logo](admin/yr.png)
# ioBroker.yr

![Number of Installations](http://iobroker.live/badges/yr-installed.svg)
![Number of Installations](http://iobroker.live/badges/yr-stable.svg)
[![NPM version](http://img.shields.io/npm/v/iobroker.yr.svg)](https://www.npmjs.com/package/iobroker.yr)

![Test and Release](https://github.com/ioBroker/ioBroker.yr/workflows/Test%20and%20Release/badge.svg)
[![Translation status](https://weblate.iobroker.net/widgets/adapters/-/yr/svg-badge.svg)](https://weblate.iobroker.net/engage/adapters/?utm_source=widget)
[![Downloads](https://img.shields.io/npm/dm/iobroker.yr.svg)](https://www.npmjs.com/package/iobroker.yr)

**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information how to disable the error reporting see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)! Sentry reporting is used starting with js-controller 3.0.

## yr.no adapter for ioBroker

fetches 10d weather forecast from [yr.no](yr.no)

[yr.no](yr.no) is a joint service by the [Norwegian Meteorological Institute](met.no) and the [Norwegian Broadcasting Corporation](nrk.no)

https://api.met.no/weatherapi/locationforecast/2.0/documentation

**Note** - if _"Send missing translations to iobroker.net"_ is activated (default) missing translations will be sent to iobroker.net server. No IPs or any additional info will be stored or analysed. Just missing translation.

## Icons
Icons are taken from here [https://api.met.no/weatherapi/weathericon/2.0/documentation](https://api.met.no/weatherapi/weathericon/2.0/documentation) and belongs to yr.no.


## TODO
* Add meteogram (png probably will discontinue with new API)
* Add daily forecast based on hourly forecast
* Add html table

<!--
	Placeholder for the next version (at the beginning of the line):
	### __WORK IN PROGRESS__
-->

## Changelog

### 3.0.3 (2021-07-12)
* (Apollon77) prevent js-controller 3.3 warnings

### 3.0.2 (2021-07-07)
* (Apollon77) Fix crash issue from Sentry

### 3.0.1 (2021-07-06)
* (Apollon77) Optimizations and Fixes
* (Apollon77) Add Sentry crash reporting

### 3.0.0 [2021-06-06]
* (withstu) Switch to new JSON API and change data Structure (breaking)
* (withstu) Update project dependencies
* (arteck) Type of state was corrected  

### 2.0.3 [2018-10-10]
* (bluefox) add translations

### 2.0.2 [2018-08-01]
* (bluefox) Warning! Breaking changes! States are renamed.
* (bluefox) Refactoring of states and roles

### 1.0.6 [2017-05-27]
* (Andre) Update iconset

### 1.0.5 [2016-10-10]
* (bluefox) move weather widgets to this adapter

## 1.0.4 [2016-07-06]
* (bluefox) fix link to readme

### 1.0.3 [2016-05-17]
* (bluefox) change readme path

### 1.0.2 [2016-05-16]
* (bluefox) add translations

### 1.0.1 [2016-04-25]
* (bluefox) add translations

### 1.0.0 [2016-03-15]
* (bluefox) change parsing of cities

### 0.1.9 [2015-10-28]
* (bluefox) fix error with translations

### 0.1.8 [2015-10-27]
* (bluefox) translations
* (bluefox) automatically upload of missing translations to iobroker.net

### 0.1.7 [2015-07-10]
* (bluefox) make yr works with metro widgets

### 0.1.6 [2015-06-12]
* (bluefox) translations

### 0.1.5 [2015-03-26]
* (bluefox) translations

### 0.1.4 [2015-03-24]
* (bluefox) remove unit "%" for "wind direction"

### 0.1.3 [2015-03-22]
* (bluefox) fix error with tomorrow and day after tomorrow

### 0.1.2 [2015-03-08]
* (bluefox) correct links to yr.no web site

### 0.1.1
* (bluefox) add translates for the weather states in other languages

### 0.1.0
* (bluefox) update yr on the new objects model

### 0.0.4
* (hobbyquaker) prepend "forecast." to state IDs

### 0.0.3
* (hobbyquaker) settings ui with autocomplete for location
* (hobbyquaker) renamed yr_forecast to forecast
* (hobbyquaker) added children attribute
* (hobbyquaker) decreased log verbosity
* (hobbyquaker) fixes

### 0.0.2
* (hobbyquaker) fixes
### 0.0.1
* (hobbyquaker) first release

## Todo
* setState forecast_object

## License
The MIT License (MIT)

Copyright (c) 2014-2021 hobbyquaker <hq@ccu.io>, Bluefox

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

