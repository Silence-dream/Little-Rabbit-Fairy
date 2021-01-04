import { reactive, watchEffect } from "vue";

//#region 图片上传
export const Uploadimg = () => {
  let UploadForm = reactive({
    uploading: 0, // 已上传的图片个数
    surplus: 3, // 剩余上传图片个数
    types: false // 上传图片按钮状态
  });

  //#region 监听上传图片个数设置上传图片按钮状态
  watchEffect(() => {
    if (UploadForm.uploading < 3) {
      UploadForm.types = false;
    } else if (UploadForm.uploading >= 3) {
      UploadForm.types = true;
    }
  });
  //#endregion

  //#region 上传图片成功回调
  const Uploads = (response, file, fileList) => {
    console.log(response);
    console.log(file);
    console.log(fileList);
    UploadForm.uploading = fileList.length; // 上传了几张图片
    UploadForm.surplus = 3 - fileList.length; // 还可上传几张图片
  };
  //#endregion

  //#region 删除上传的图片成功回调
  const Remove = (file, fileList) => {
    console.log(file);
    console.log(fileList);
    UploadForm.uploading = fileList.length; // 上传了几张图片
    UploadForm.surplus = 3 - fileList.length; // 还可上传几张图片
  };
  //#endregion

  return {
    UploadForm,
    Uploads,
    Remove
  };
};

//#endregion
