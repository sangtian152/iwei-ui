<template>
  <div class="page-progress">
    <h1 class="page-title">Progress</h1>
    <zmbl-cell title="默认">
      <zmbl-progress></zmbl-progress>
    </zmbl-cell>
    <zmbl-cell title="设置 value">
      <zmbl-progress :value="20"></zmbl-progress>
    </zmbl-cell>
    <zmbl-cell title="左右文字">
      <zmbl-progress :value="40">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
      </zmbl-progress>
    </zmbl-cell>
    <zmbl-cell title="定义线宽">
      <zmbl-progress :value="60" :bar-height="5"></zmbl-progress>
    </zmbl-cell>
    <div class="page-progress-wrapper">
      <zmbl-button size="large" type="primary" @click.native="uploadFile">上传文件</zmbl-button>
      <zmbl-progress :value="value" v-if="progressVisible" transition="progress-fade">
        <div slot="end">{{ value }}%</div>
      </zmbl-progress>
    </div>
  </div>
</template>

<style lang="scss">
  .page {
    &-progress {
      .zmbl-cell-value {
        flex: 2.5;
        position: relative;
        top: -20px;
      }

      .zmbl-progress {
        width: 100%;
        position: absolute;
        top: 5px;
      }

      &-wrapper {
        padding: 0 10px;
        margin-top: 50px;

        .zmbl-progress {
          position: relative;
        }

        .progress-fade-transition {
          transition: opacity .3s;
        }

        .progress-fade-enter,
        .progress-fade-leave {
          opacity: 0;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import { Toast } from 'src/index';

  export default {
    data() {
      return {
        progressVisible: false,
        value: 0,
        uploading: false,
        timer: null
      };
    },

    watch: {
      value(val) {
        if (val >= 100) {
          this.uploading = false;
          this.progressVisible = false;
          setTimeout(() => Toast({ message: '上传成功', position: 'bottom', duration: 1000 }), 200);
          clearTimeout(this.timer);
        }
      }
    },

    methods: {
      uploadFile() {
        if (!this.uploading) {
          this.value = 0;
          this.progressVisible = true;
          this.uploading = true;
          this.timer = setInterval(() => this.value++, 10);
        }
      }
    }
  };
</script>