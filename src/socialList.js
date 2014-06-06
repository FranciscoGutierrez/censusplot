/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 CensusViz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* Social List Component.
 * Universidad de las Américas Puebla http://ict.udlap.mx
 * As part of REAUMOBILE project.
 * Author: Francisco Gutiérrez fsalvador23@gmail.com
 */

document.registerElement('social-list',{prototype: Object.create(HTMLElement.prototype)});

var sLeftTab   = "< Personas Interesantes"
var scenterTab = "Personas que quizás conozcas"
var srightTab  = "Líderes de Opinión >"

$("social-list").append("<div class=\"container\"></div>");
$(".container").append("<div class=\"tab-bar\"></div>");
$(".tab-bar").append("<div class=\"left-tab\">"+sLeftTab+"</div>");
$(".tab-bar").append("<div class=\"center-tab\">"+scenterTab+"</div>");
$(".tab-bar").append("<div class=\"right-tab\">"+srightTab+"</div>");

