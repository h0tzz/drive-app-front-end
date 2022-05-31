### Официальная документация

Для работы с кодовой базой используется решение `rush` от `microsoft`. По [ссылке](https://rushjs.io/pages/intro/welcome/) доступна документация `rush`.

### Как начать работу

После клонирования репозитория

- Установить `rush` и `dotenv-cli`

      npm i -g @microsoft/rush
      npm i -g dotenv-cli

- Сделать `rush update` для установки зависимостей
- Сделать `rush build` для сборки пакетов

### Как работать с репозиторием

1. Вместо `npm` для работы с командами пакетов используется команда `rushx` (заменяет `npm run`, например `rushx start`, вместо `npm run start`). Она используется для запуска `scripts` из package.json пакета, которые надо запускать из директории пакета
2. Первая важная команда, `rush update` устанавливает необходимые зависимости
   \*\* При изменении зависимостей пакетов, или после `git pull`, не забывать делать `rush update` для обновления и линковки зависимостей
3. Команда `rush build` собирает все пакеты, используется скрипт `build` из package.json пакета
4. Для локального запуска проекта, надо выполнить команду `rush run`.

### Дополнительные команды rush

В данной секции описаны дополнительные команды, которых нет в официальном функционале `rush`. Команды для использования с rush можно описывать в `common/config/command-line.json`

- `rushx lint` запускает eslint для пакетов в которых определен скрипт `lint`
- `rushx lint:fix` запускает eslint с флагом --fix для пакетов в которых определен скрипт `lint:fix`
