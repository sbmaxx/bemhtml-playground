REMOTE_DIR = sbmaxx@rozhdestvenskiy.ru:/var/www/vhosts/rozhdestvenskiy.ru/public/dev/bemhtml
LOCAL_DIR = /Users/sbmaxx/Development/bemhtml-demo

REPLACES = ./node_modules/bem-xjst/lib/bemhtml/compiler.js \
	./node_modules/bem-xjst/node_modules/xjst/lib/xjst/compiler/base.js \
	./node_modules/bem-xjst/node_modules/xjst/lib/xjst/cli.js

define replaces
	sed -i.bak "s|uglify = require('uglify-js')|uglify = require('$(abspath ./lib/ast)')|g" $(1)
	sed -i.bak "s|fs = require('fs')|fs = {}|g" $(1)
	rm -rf "$(1).bak"
endef


install:
	npm install
	$(foreach file,$(REPLACES),$(call replaces,$(file));)
	@echo "ok"

upload:
	rsync -azh --progress -e "ssh" $(LOCAL_DIR)/ $(REMOTE_DIR)

download:
	rsync -azh --progress -e "ssh" $(REMOTE_DIR)/ $(LOCAL_DIR)

.PHONY: download upload install
