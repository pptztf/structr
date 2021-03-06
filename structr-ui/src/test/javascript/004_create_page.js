/*
 * Copyright (C) 2010-2018 Structr GmbH
 *
 * This file is part of Structr <http://structr.org>.
 *
 * Structr is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * Structr is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Structr.  If not, see <http://www.gnu.org/licenses/>.
 */
var s = require('../setup'),
		login = require('../templates/login'),
		createPage = require('../templates/createPage');

var testName = '004_create_page';
var heading = "Create Page", sections = [];
var desc = "This animation shows how an empty page is created.";
var numberOfTests = 3;
var pageName = 'test-page';

s.startRecording(window, casper, testName);

casper.test.begin(testName, numberOfTests, function (test) {

	casper.start(s.url);

	login.init(test, 'admin', 'admin');

	createPage.init(test, pageName);

	casper.then(function () {
		test.assertSelectorHasText('#previewTabs li.page.active .name_', pageName);
	});

	sections.push('If it is not already active, click on the "Pages" menu entry.');

	sections.push('Click on the icon with the green plus on the rightmost tab above the preview frame.');

	sections.push('A new page with a random name has been created. The page is automatically loaded into the preview window.');

	casper.then(function () {
		s.animateHtml(testName, heading, sections);
	});

	casper.run();

});