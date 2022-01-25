---
title: Подробнее про нотации моделей
tags: [9й класс, информатика]
style: fill
color: dark
comments: true
description: Карточка урока 26.04.2021
---

Источник: [Шаблоны Miro](https://miro.com/templates/)

**Inquiring and analyzing**: Analyze existing products

# Виды нотаций моделей

## План на урок:

- Понять что такое нотация
- Разобрать домашнее задание
- Использовать следующие нотации при создании моделей
  - DFD
  - ERD
  - UML

### Теория:

>**Нотация**:
это система условных знаков и правил их использования для описания различных категорий моделируемой системы, таких как объектов, процессов, взаимосвязей и т.п.

Давайте посмотрим на то что вы наваяли, используя свой голый энтузиазм и знания, кто нибудь может прочитать что у вас получилось?

[ССЫЛКА на Доску](https://miro.com/welcomeonboard/Abn5LugjHvTO6WwPBE5pxR88kHfpuDATKRA4djChB9Z6HZaj3vBbzNnmV33MZzMY)

![Qr code](https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fmiro.com%2Fwelcomeonboard%2FAbn5LugjHvTO6WwPBE5pxR88kHfpuDATKRA4djChB9Z6HZaj3vBbzNnmV33MZzMY&chs=180x180&choe=UTF-8&chld=L)

#### Виды нотаций:

>**DFD**:
Это нотация, предназначенная для моделирования информационный систем с точки зрения хранения, обработки и передачи данных.

![Графические обозначения DFD](https://hsto.org/webt/59/e1/fe/59e1fed6834af005149642.png)

В данном варианте представления моделей различают следующие обьекты:

- **Внешняя сущность** - источники информации для модели, данные обьекты не входят в модель
- **Процесс** - последовательность действий, которые надо предпринять чтобы обработать данные
- **Хранилище данных** - внутреннее хранилище данных для процессов, происходящих внутри модели
- **Поток данных** - показывают откуда информация приходит и куда уходит из процессов и хранилищ

![Пример DFD диаграммы](https://hsto.org/webt/59/e1/14/59e1140d498b7040864280.png)

Ссылка на шаблон в Miro: [DFD template](https://miro.com/templates/data-flow-diagram/)

>**ERD**:
Тип структурных диаграмм (их нотация), предназначенная для моделирования структуры баз данных.  ERD содержит множество различных симвволов, которые показывают **главные сущности** модели, а также **связи** внутри них.

![Графические обозначения ERD](https://cdn-images.visual-paradigm.com/guide/data-modeling/what-is-erd/09-erd-many-to-many-example.png)

Существует три варианта ERD:

- **Концептуальный**
- **Логический**
- **Физический**

| Особенности модели | Концептуальный | Логический | Физический |
|:---:|:---:|:---:|:---:|
| Название сущности | Да | Да | Да |
| Связь | Да | Да | Да |
| Название колонок | | Да | Да |
| Тип колонки | | Опционально | Да |
| Первичный ключ | | | Да |
| Вторичный ключ| | | Да |

Ниже приведен пример ERD модели для системы аренды фильмов.

Эта модель является ярким представителем физической ERD модели.

![Пример ERD диаграммы](https://cdn-images.visual-paradigm.com/guide/data-modeling/what-is-erd/13-erd-example-movie-rental-system.png)

Слава господи в Miro есть простой шаблон для создания ERD моеделей.

Ссылка на шаблон в Miro: [ERD template](https://miro.com/templates/entity-relationship-diagram/)

>**UML**:
это стандартный язык для определения, визуализации, конструирования и документирования артефактов программных систем.

*Картинка стоит тысячи слов* , эта идиома абсолютно соответствует описанию UML. Объектно-ориентированные концепции были введены намного раньше, чем UML. На тот момент не было стандартных методологий для организации и консолидации объектно-ориентированной разработки. Тогда-то и появился UML.

**Структурные вещи** определяют статическую часть модели. Они представляют физические и концептуальные элементы. Ниже приведены краткие описания структурных вещей.

- **Класс -** класс представляет собой набор объектов, имеющих схожие обязанности.

![учебный класс](https://coderlessons.com/wp-content/uploads/2019/07/uml_class-1.jpg)

- **Интерфейс -** Интерфейс определяет набор операций, которые определяют ответственность класса.

![Интерфейс](https://coderlessons.com/wp-content/uploads/2019/07/uml_interface-1.jpg)

- **Сотрудничество -** Сотрудничество определяет взаимодействие между элементами.

![сотрудничество](https://coderlessons.com/wp-content/uploads/2019/07/uml_collaboration-1.jpg)

- **Вариант использования -** Вариант использования представляет собой набор действий, выполняемых системой для конкретной цели.

![Случай использования](https://coderlessons.com/wp-content/uploads/2019/07/uml_usecase-1.jpg)

- **Компонент -** Компонент описывает физическую часть системы.

![Составная часть](https://coderlessons.com/wp-content/uploads/2019/07/uml_component-1.jpg)

- **Узел -** узел может быть определен как физический элемент, который существует во время выполнения.

![Узел](https://coderlessons.com/wp-content/uploads/2019/07/uml_node-1.jpg)

[Тут Microsoft немного рассказывает про UML](https://www.microsoft.com/ru-ru/microsoft-365/business-insights-ideas/resources/guide-to-uml-diagramming-and-database-modeling)

![Пример UML диаграммы](https://grapholite.ru/static/i/uml-activity-example.png)

Ссылка на шаблон в Miro: [UML template](https://miro.com/templates/uml-diagram/)

### Задание на урок и на дом:

1. Выбрать понравившуюся вам нотацию
2. Используя ее завершить моделирование карточной игры