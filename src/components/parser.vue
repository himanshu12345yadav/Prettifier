<template>
  <div
    class="parser-content"
    ref="parser_content"
    @mousemove="dividerhandler($event)"
  >
    <div class="parser-input" ref="parser_input">
      <textarea
        autocorrect="false"
        autocapitalize="false"
        autocomplete="off"
        spellcheck="false"
        tabindex="0"
        ref="input_text"
        @keyup="keyUpHandler"
        v-model="input_text"
        placeholder="Write your URL Here!"
      ></textarea>
    </div>
    <div
      class="parser-divider"
      ref="parser_divider"
      @mousedown="isDraging = true"
    ></div>
    <div class="parser-output" ref="parser_output">
      <div
        contenteditable="true"
        autocorrect="false"
        autocapitalize="false"
        autocomplete="off"
        spellcheck="false"
        tabindex="0"
        class="parser-output-content"
        ref="output_text"
      >
        <div v-if="render && !isBroken">
          <div
            class="parsedDiv"
            v-for="(item, index) in reactive_data"
            :key="index"
          >
            <span
              v-if="item.key === 'QueryParameters'"
              class="QueryParameters"
              >{{ item.value }}</span
            >
            <span v-else>
              <span class="key">{{ item.key }} : </span>
              <span class="value">{{ item.value }}</span>
            </span>
          </div>
        </div>
      </div>
      <div v-show="isBroken" class="parsing-error">
        <div class="parsing-error-message">
          <i class="fa fa-exclamation-triangle parsing-error-icon"></i>
          {{ parsing_error_message }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.key {
  color: #7af5e9;
}
.value {
  color: #f3e143;
}
.QueryParameters {
  color: #e2838f;
}
.parsedDiv {
  display: block;
  height: auto;
  max-width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.parsedDiv span {
  display: inline-block;
  max-width: 100%;
  height: auto;
}
.parser-content {
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  flex-direction: row;
  position: relative;
}
.parser-content *:not(i) {
  font-family: "Roboto Mono", monospace;
  font-size: 1.1rem;
}
.parser-content textarea {
  border-radius: 10px;
  width: 100%;
  background-color: transparent;
  height: 100%;
  outline: none;
  border: none;
  resize: none;
  padding: 5px 15px;
  color: #e99d5f;
}
.parser-output-content {
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  max-height: 450px !important;
  background-color: transparent;
  outline: none;
  border: none;
  font-style: normal;
  color: #ebebeb;
  font-family: "Roboto Mono", monospace;
  height: 100%;
}
.parser-output-content div {
  font-style: normal;
  color: #ebebeb;
  padding: 5px 15px;
  line-height: 1.6;
}
.parser-input {
  height: calc(100% - 3px);
  width: calc((100% - 20px) / 2);
  border-top: 2px solid #28d372;
}
.parser-divider {
  width: 20px;
  height: calc(100% - 3px);
  transform: translate(-50%);
  background: #333642;
  cursor: col-resize;
  border-radius: 2px;
  position: absolute;
  left: 50%;
  top: 0px;
  z-index: 10;
}
.parser-output {
  margin-left: auto;
  width: calc((100% - 20px) / 2);
  height: calc(100% - 3px);
  border-top: 2px solid #e043e0;
  overflow-y: scroll;
  position: relative;
}
.parsing-error {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1111;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
::placeholder {
  text-align: center;
  line-height: 400px;
  font-size: 1.5rem;
  font-family: "Recursive", sans-serif;
}
.parsing-error-message {
  font-family: "Recursive", sans-serif !important;
  color: #ee6f6f;
  font-size: 1.5rem !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.5px;
}
.parsing-error-icon {
  color: #d8d8d8;
  padding: 20px;
  font-size: 3rem;
}

@media (max-width: 768px) {
  ::placeholder {
    font-size: 1.1rem;
  }
}
@media (max-width: 576px) {
  ::placeholder {
    font-size: 1rem;
  }
}
</style>

<script>
import Parser from "../components/parser.js";

export default {
  name: "Parser",
  components: {},
  data() {
    return {
      isDraging: false,
      isBroken: false,
      input_text: "",
      reactive_data: [],
      render: false,
      parsing_error_message: "",
    };
  },
  methods: {
    dividerhandler(event) {
      let rect = this.$refs.parser_content.getBoundingClientRect();
      const box_width = rect.right - rect.left;
      let x_offset = event.clientX - rect.left;
      if (this.isDraging && x_offset >= 15 && x_offset <= box_width - 30) {
        this.$refs.parser_divider.style.left = `${x_offset}px`;
        this.$refs.parser_input.style.width = `${x_offset - 10}px`;
        this.$refs.parser_output.style.width = `${box_width - x_offset}px`;
        this.$refs.input_text.blur();
        this.$refs.output_text.blur();
      } else {
        return;
      }
    },
    keyUpHandler(event) {
      let parser = new Parser(this.input_text);
      try {
        if (event.target.value.trim().length === 0) {
          throw new Error("URL is Empty");
        }
        let parsed_data = parser.parsedOutput();
        if (!this.render) {
          this.reactive_data = parsed_data;
        } else {
          this.reactive_data = [];
          parsed_data.forEach((item, index) => {
            this.reactive_data.splice(index, 0, {
              key: item.key,
              value: item.value,
            });
          });
        }
        this.render = true;
        this.isBroken = false;
      } catch (err) {
        if (err.message === "URL is Empty") {
          this.parsing_error_message = "Start, Typing the URL";
          this.isBroken = true;
        } else {
          this.parsing_error_message = "Malformed URL";
          this.isBroken = true;
        }
      }
    },
  },
  mounted() {
    document.addEventListener("mouseup", () => {
      this.isDraging = false;
    });
  },
};
</script>