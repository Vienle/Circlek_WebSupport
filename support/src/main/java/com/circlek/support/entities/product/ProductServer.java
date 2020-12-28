package com.circlek.support.entities.product;

import java.util.Date;


public class ProductServer{
   private String itemcode;
   private String barcodes;
   private String name;
   private Character validfor;
   private Date createDate;
   private Date updateDate;
    private Character sellItem;
   private String itemDC;


    public ProductServer() {
    }

    public String getItemcode() {
        return itemcode;
    }

    public void setItemcode(String itemcode) {
        this.itemcode = itemcode;
    }

    public String getBarcodes() {
        return barcodes;
    }

    public void setBarcodes(String barcodes) {
        this.barcodes = barcodes;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Character getValidfor() {
        return validfor;
    }

    public void setValidfor(Character validfor) {
        this.validfor = validfor;
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

    public Character getSellItem() {
        return sellItem;
    }

    public void setSellItem(Character sellItem) {
        this.sellItem = sellItem;
    }

    public String getItemDC() {
        return itemDC;
    }

    public void setItemDC(String itemDC) {
        this.itemDC = itemDC;
    }
}
