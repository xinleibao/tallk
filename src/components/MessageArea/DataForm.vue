<template>
    <div class="data-form-container">
        <form id="form-container" ref='form' class="form-container" @submit.prevent="handleSubmit">
            <div class="item">
                <input type="text" placeholder="用户昵称" v-model="formData.nickname" maxlength="10">
                <span class="namemax">{{ formData.nickname.length }}/10</span>
            </div>
            <div class="err">{{ error.nickname }}</div>
            <div class="item">
                <textarea placeholder="输入内容" v-model="formData.content" maxlength="300">
                </textarea>
                <span class="textmax">{{ formData.content.length }}/300</span>
            </div>
            <div class="err">{{ error.content }}</div>
            <button :disabled="isDisabled" class="btn" type="submit">{{ isDisabled ? '正在提交中' : '提交' }}</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            formData: {
                nickname: '',
                content: ''
            },
            error: {
                nickname: '',
                content: ''
            },
            isDisabled: false
        }
    },
    methods: {
        handleSubmit() {

            this.error.nickname = this.formData.nickname ? '' : '用户名不能为空'
            this.error.content = this.formData.content ? '' : '内容不能为空'

            if (this.error.nickname || this.error.content) {
                return
            }
            this.isDisabled = true
            this.$emit('submit', this.formData, (message) => {
                this.$showMessage({
                    content: message,
                    type: 'success',
                    duration: 1000,
                    container: this.$refs.form,
                    callback: (() => {
                        this.isDisabled = false,
                        this.formData.nickname = '',
                        this.formData.content = ''
                    })
                })


            })
        }
        // $emit('submit',formData)
    }
}
</script>
  
<style lang="less" scoped>
@import url('~@/styles/var.less');

.data-form-container {
    // border: 1px solid #ccc;
    width: 100%;
    height: 100%;

    .form-container {
        width: inherit;
        height: inherit;

        input[type=text],
        textarea {
            width: inherit;
            border: dashed @gray 2px;
            outline: none;
            padding: 8px;
            border-radius: 5px;

        }

        textarea {
            width: 90%;
            min-height: 200px;
            margin: 0;
            resize: none;
            border-radius: 5px;
        }

        .btn {
            border: none;
            padding: 6px 20px;
            border-radius: 3px;
            background-color: @primary;
            color: @white;
            cursor: pointer;
            margin: 5px 0;

            &:hover {
                background: skyblue;
            }

            &:disabled {
                background: @lightWords;
                cursor: not-allowed;
            }
        }

    }

    .err {
        height: 20px;
        padding: 2px;
        font-size: 14px;
        color: @danger;
    }

    .namemax {
        position: absolute;
        right: 50%;
        bottom: 3px;
        color: @gray;
        font-size: 12px;
    }

    .textmax {
        position: absolute;
        right: 10%;
        bottom: 6px;
        color: @gray;
        font-size: 12px;
    }

    .item:nth-child(1) {
        position: relative;
        width: 50%;
    }

    .item:nth-child(3) {
        position: relative;
        width: 100%;

    }
}
</style>