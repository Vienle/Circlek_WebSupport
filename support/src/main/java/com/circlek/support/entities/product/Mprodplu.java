package com.circlek.support.entities.product;

public class Mprodplu {
    private String itemcode;
    private String barcode;

    public Mprodplu() {
    }

    public String getItemcode() {
        return itemcode;
    }

    public void setItemcode(String itemcode) {
        this.itemcode = itemcode.trim();
    }

    public String getBarcode() {
        return barcode;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode.trim();
    }
}
