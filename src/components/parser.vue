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
        @keydown="keyDownHandler"
        v-model="input_text"
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
      ></div>
      <div class="parsing-error hidden" ref="parsing_error">
        <div class="parsing-error-message">Sorry, This URL is Broken</div>
      </div>
    </div>
  </div>
</template>

<style >
.key {
  color: #00f7ff;
}
.value {
  color: #00ff62;
}
.parsedDiv {
  display: block;
  height: fit-content !important;
}
</style>
<style>
.parser-content {
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  flex-direction: row;
  position: relative;
}
.parser-content * {
  font-family: monospace;
  font-size: 1.1rem;
  font-size: normal;
}
.parser-content textarea {
  border-radius: 10px;
  width: 100%;
  background-color: transparent;
  height: 100%;
  outline: none;
  border: none;
  resize: none;
  font-style: normal;
  color: #ebebeb;
  padding: 5px 15px;
  color: #e99d5f;
}
.parser-output-content {
  border-radius: 10px;
  width: 100%;
  max-height: 450px !important;
  background-color: transparent;
  outline: none;
  border: none;
  font-style: normal;
  color: #ebebeb;
  font-family: monospace;
  padding: 5px 15px;
  overflow-y: scroll;
  height: 100%;
}
.parser-output-content div {
  font-style: normal;
  color: #ebebeb;
  font-family: monospace;
  padding: 5px 15px;
}
.parser-input {
  height: calc(100% - 3px);
  width: calc((100% - 20px) / 2);
  border-top: 2px solid #0ba04c;
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
  border-top: 2px solid #b317b3;
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
.hidden {
  display: none;
}
.parsing-error-message {
  color: white;
  font-size: 1.5rem;
  color: #c95b5b;
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
    };
  },
  methods: {
    dividerhandler(event) {
      let rect = this.$refs.parser_content.getBoundingClientRect();
      const box_width = rect.right - rect.left;
      let x_offset = event.clientX - rect.left;
      if (this.isDraging && x_offset >= 15 && x_offset <= box_width - 10) {
        this.$refs.parser_divider.style.left = `${x_offset}px`;
        this.$refs.parser_input.style.width = `${x_offset}px`;
        this.$refs.parser_output.style.width = `${box_width - x_offset}px`;
        this.$refs.input_text.blur();
        this.$refs.output_text.blur();
      } else {
        return;
      }
    },
    keyUpHandler(event) {
      let parser = new Parser(this.input_text);
      this.$refs.output_text.innerHTML = "";
      try {
        if (!this.isBroken) {
          this.$refs.parsing_error.classList.add("hidden");
        }
        if (event.target.value.trim().length === 0) {
          throw new Error("URI is Empty");
        }
        const parsed_data = parser.parsedOutput();
        parsed_data.forEach((item) => {
          let parsedDiv = document.createElement("div");
          parsedDiv.classList.add("parsedDiv");
          let keySpan = document.createElement("span");
          keySpan.classList.add("key");
          keySpan.innerHTML = `${item.key} : `;
          parsedDiv.appendChild(keySpan);
          let valueSpan = document.createElement("span");
          valueSpan.classList.add("value");
          valueSpan.innerHTML = `${item.value}`;
          parsedDiv.appendChild(valueSpan);
          this.$refs.output_text.appendChild(parsedDiv);
        });
      } catch (err) {
        if (err.message === "URI is Empty") {
          this.$refs.parsing_error.classList.remove("hidden");
          this.$refs.parsing_error.children[0].innerText =
            "Start, Typing the URL";
          this.isBroken = true;
        } else {
          this.$refs.parsing_error.classList.remove("hidden");
          this.$refs.parsing_error.children[0].innerText = "Malformed URI";
          this.isBroken = true;
        }
      }
    },
    keyDownHandler() {
      this.$refs.parsing_error.classList.add("hidden");
      this.isBroken = false;
    },
  },
  mounted() {
    document.addEventListener("mouseup", () => {
      this.isDraging = false;
    });
  },
};
</script>