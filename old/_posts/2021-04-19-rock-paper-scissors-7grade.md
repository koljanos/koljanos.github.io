---
title: Rock paper scissors
tags: [7й класс, everyone can code]
style: fill
color: info
comments: true
description: Карточка урока 20.04.2021
---

Источник: [Everyone Can Code Puzzles](https://books.apple.com/ru/book/everyone-can-code-puzzles/id1481279769)

# Rock paper scissors составление правил собственной игры

## План на урок:

- Разобраться с shared code
- Добавить действия в готовый код
- Решить задания
  - Sharing code
  - Adding actions
  - Modifying Properties

### Теория:

>**Shared code**:
Код, размещенный в *shared code* доступен из всех других файлов, и всклюяает в себя все модули проекта

В то время как код из *main* доступен только из него.

Добавьте код

```swift
game.addOpponent("IGOR")
```

Запустите свой код и у вас появится новый оппонент.

Если же вы добавите

```swift
game.roundPrize = "candy"
```

То у вас добавится новый приз.

#### Теоретическое задание

Посмотрите в *MyGame*, в ней будет функция *setupGame()* как вы думаете что означает слово *public* перед ней?

#### Как объявлять функцию?

```swift
func turnLeft(){
turnRight()
turnRight()
turnRight()
}
```
