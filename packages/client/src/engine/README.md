# Game

__Game__ - главный класс игры.

## Конструктор

Принимает в себя следующие параметры:

- `canvas` - объект канваса
- `InitialScene` - начальная сцена
- `width` - ширина игрового поля
- `height` - высота игрового поля

## Методы
- `start` - запуск игрового цикла
- `stop` - остановка игрового цикла
- `getContext` - получить 2D контекст канваса
- `getCanvas` - получить объект канваса
- `setScene` - установить активную сцену
- `update` - вызов обновления всех объектов на сцене
- `render` - отрисовка сцены

# Vector

__Vector__ - класс, представляющий математическую модель вектора.

## Конструктор

Принимает в себя следующие параметры:
- `x` - координату по оси абсцисс
- `y` - координату по оси ординат

## Методы
- `length` - для расчета длины вектора
- `normalize` - для нормализации вектора
- `add` - для сложения векторов
- `addScaled` - для сложения векторов и умножения на скаляр
- `substract` - для вычитания векторов
- `multiplyScalar` - для умножения вектора на скаляр
- `divideScalar` - для деления вектора на скаляр
- `dotProduct` - для вычисления скалярного произведения векторов
- `crossProduct` - для вычисления векторного произведения векторов
- `copy` - для копирования вектора

# InputService
__InputService__ - класс-синглтон, который отвечает за обработку пользовательского ввода.

## Методы
- `getInstance` - получить инстанс класса
- `getInputKeyState` - получить состояние клавиши (нажата или нет)
- `changeInputKeyState` - изменить состояние клавиши
- `destroy` - разрушить инстанс класса и удалить все обработчики событий
- `toggleInputKeyState` - переключить состояние клавиши на противоположное

# EntityService
__EntityService__ - класс-синглтон, который отвечает за регистрацию и разрушение игровых объектов на каждой сцене.

## Методы
- `getInstance` - получить инстанс класса
- `registerEntity` - добавить сущность в общий пул сущностей на сцене
- `registerEntities` - `--|--`
- `destroyEntity` - удалить сущность со сцены
- `destroyAllEntities` - удалить все сущности со сцены

# AbstractEntity
__AbstractEntity__ - абстрактный класс сущности

## Методы
- `(abstract) update` - абстрактный метод обновления состояния игрового объекта
- `(abstract) render` - абстрактный метод отрисовки объекта
- `(abstract) destroy` - абстрактный метод удаления игрового объекта со сцены
- `move` - метод перемещения
- `checkCollision` -  метод проверки на коллищию с другим объектом
- `calculateCollisionShape` - метод вычисления области коллизии с другим объектом
- `resolveCollision` - метод разрешения коллизии (объект выталкивается из другого объекта)

# AbstractScene
__AbstractScene__ - абстрактный класс сцены.

# Методы
- `(abstract) update` - абстрактный метод обновления состояния сцены
- `(abstract) render` - абстрактный метод отрисовки сцены
- `registerEntities` -  добавить объект на сцену
- `destroyEntity` - удалить объект со сцены
- `destroy` - разрушить сцену
- `destroyAllEntities` - удалить все объекты на сцене

> P.S: будет редактироваться