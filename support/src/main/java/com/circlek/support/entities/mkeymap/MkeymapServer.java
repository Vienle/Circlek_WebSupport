package com.circlek.support.entities.mkeymap;

import java.util.Date;

public class MkeymapServer {
    private String text;
    private String itemcode;
    private Date createDate;
    private Date updateDate;
    private String store;

    public MkeymapServer() {
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text.trim();
    }

    public String getItemcode() {
        return itemcode;
    }

    public void setItemcode(String itemcode) {
        this.itemcode = itemcode.trim();
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getStore() {
        return store;
    }

    public void setStore(String store) {
        this.store = store.trim();
    }
}
