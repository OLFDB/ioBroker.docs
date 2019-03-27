---
title: визуализация
lastChanged: 13.09.2018
translatedFrom: de
translatedWarning: Если вы хотите отредактировать этот документ, удалите поле «translationFrom», в противном случае этот документ будет снова автоматически переведен
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/ru/viz/widgets.md
hash: Ma/ZdawKE4JUnzvNSVsgZhrua+/xTjhAPGc3ThcEbfM=
---
# Виджеты
## Вообще
Виджеты («устройство, вещь») в этом контексте представляют собой элементы отображения, которые по-разному представляют числа, тексты, изображения или диаграммы и предлагают возможности взаимодействия.

# **Виджеты ioBroker.vis**
Для визуализации в ioBroker с vis существуют разные наборы виджетов.

-------------------------------------------------------------------------------  
-------------------------------------------------------------------------------

# Основные настройки виджетов
## **Обычно**
![001_Widget_Generell](../../de/viz/../media/vis/vis_widgets_001_Widget_Generell.jpg)

Атрибут | Описание |
---- | ---- |
Имя | Здесь вы можете ввести уникальное имя для этого виджета. Комментарий | Здесь вы можете ввести краткое описание. должно появиться в нескольких.
Неактивно (заблокировано) |: construction:

## **Видимость**
Видимость виджета может быть сделана зависимой от состояния точки данных.
![002_Widget_Sichtbarkeit](../../de/viz/../media/vis/vis_widgets-2_002_Widget_Sichtbarkeit.jpg)

Атрибут | Описание |
---- | ---- |
Идентификатор объекта | Введите идентификатор точки данных, чтобы управлять видимостью выбранного виджета. Точка данных может быть найдена с помощью кнопки.
Условие | Виджет будет виден, если введенное здесь условие для о.а. Точка данных ...
Значение условия | ... соответствует введенному здесь значению.

## **Общие**
![](../../de/viz/../media/vis/vis_widgets_003_Widget_Allgemein.jpg) Раздел «Общие» специфичен для каждого виджета и подробно описан для каждого виджета.
В этом разделе требуемая точка данных в поле идентификатора объекта отображается на виджет.

*** **Настройки CSS** виджета находятся в следующих пунктах меню и могут быть адаптированы к вашим собственным желаниям:

## **CSS в целом**
![](../../de/viz/../media/vis/vis_widgets_004_CSS_allgemein.jpg)

Атрибут | Описание |
---- | ---- |
left | расстояние от левого края верхней части вида | расстояние от вершины ширины вида | ширина высоты виджета | высота z-индекса виджета | указывают плоскость, в которой лежит виджет (0 = на фоне, положительные значения = каждый чем выше значение, тем дальше вверх) overflow-x | Свойство overflow указывает, что должно произойти, если содержимое переполняется в блоке элемента. Это свойство указывает, следует ли добавлять содержимое на полосы прокрутки, если содержимое элемента слишком велико для размещения в указанной области.
Переполнение-у |
непрозрачность | прозрачность (0 = непрозрачный -> изображение невидимое .. 1 = прозрачный -> изображение видимое)

## **CSS Font & Text**
![005_CSS_Font_Text](../../de/viz/../media/vis/vis_widgets_005_CSS_Font_Text.jpg)

Атрибут | Описание |
---- | ---- |
color | цвет шрифта (через диалоговое окно выбора или с помощью цветового кода) text-align | очистка текста (слева, справа, по центру) text-shadow | цвет font-семейства шрифтов | font font-style | тип шрифта (обычный, курсив, наклонный, начальный, унаследовать) font-option | Вариант набора символов (обычный, маленькие заглавные буквы, ...) font-weight | размер шрифта font-size | размер шрифта line-height | межстрочный интервал межстрочный интервал | шаг межстрочный интервал | межстрочный интервал

## **CSS фон**
![006_CSS_Hintergrund](../../de/viz/../media/vis/vis_widgets_006_CSS_Hintergrund.jpg)

Атрибут | Описание |
---- | ---- |
background | Здесь вы можете указать более одного из следующих свойств -color | background color -image | background image -repeat | Указывает, повторяется ли фон по всей ширине и / или высоте элемента.
-attachement | Указывает, является ли фоновое изображение фиксированным или прокручивается при перемещении. -position | Ориентация фонового изображения (https://www.w3schools.com/cssref/pr_background-position.asp) -size | размер фонового изображения -clip | Управляет перекрытием с началом координат | координат координат начала координат для изображений

(см. https://www.w3schools.com/cssref/css3_pr_background.asp)

## **CSS-граница**
![007_CSS_Border](../../de/viz/../media/vis/vis_widgets_007_CSS_Border.jpg)

Атрибут | Описание |
---- | ---- |
-width | толщина границы -стиль | стиль линии границы -color | цвет границы -radius | угловой радиус границы; может составлять не более половины более короткого диапазона виджета

## **CSS тень и расстояние**
![008_CSS_Schatten_Abstand](../../de/viz/../media/vis/vis_widgets_008_CSS_Schatten_Abstand.jpg)

Атрибут | Описание |
---- | ---- |
padding | смещение от края поля виджета padding-left | смещение на левой стороне padding-top | смещение на верхней стороне padding-right | смещение на правой стороне padding-bottom | смещение на нижней стороне box-shadow | color тень поля виджета margin-top | верхнее поле вокруг виджета (авто,%, px, pt, cm) margin-right | правое поле вокруг виджета margin-bottom | нижнее поле вокруг виджета margin-left | left margin вокруг виджета

[185]:…