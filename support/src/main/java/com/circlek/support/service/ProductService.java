package com.circlek.support.service;

import com.circlek.support.entities.product.Mprodplu;
import com.circlek.support.entities.product.Mproduct;
import com.circlek.support.entities.product.ProductServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ProductService {
    @Autowired
    private EntityManager entityManager;

    public HashMap<String,Object> getProductByServer(String dataCondition){
        List<ProductServer> productServerList = new ArrayList<>();
//        List<String> listItemCodeSAP = new ArrayList<>();
        try {
            Query query = entityManager.createNativeQuery("SELECT itemcode, codebars, ItemName, validfor, createdate, updatedate, SellItem,U_NBS_DCItem FROM [SAP].[HANOI_SAP_LIVE].[dbo].[OITM] " +
                    "with(nolock) WHERE codebars in (:data) or itemcode in (:data)");
            List<String> listItemcode = Arrays.asList(dataCondition.trim().split(","));

            //List<String> listIOB = Stream.of(dataCondition.split(",")).collect(Collectors.toList());
            query.setParameter("data", listItemcode);

            List<Object[]> listProduct = query.getResultList();

            for (Object[] obj : listProduct
            ) {
                ProductServer productServer = new ProductServer();
                productServer.setItemcode((String) obj[0]);
                productServer.setBarcodes((String) obj[1]);
                productServer.setName((String) obj[2]);
                productServer.setValidfor((Character) obj[3]);
                productServer.setCreateDate((Timestamp) obj[4]);
                productServer.setUpdateDate((Timestamp) obj[5]);
                productServer.setSellItem((Character) obj[6]);
                productServer.setItemDC((String) obj[7]);
                productServerList.add(productServer);
//                listItemCodeSAP.add(productServer.getItemcode());
            }
        }catch (Exception ex){
            System.out.println(ex.getMessage());
        }
        HashMap<String,Object> response = new HashMap<>();
        response.put("server",productServerList);
        //response.put("items",listItemCodeSAP);

        return response;
    }

    public List<Mproduct> getProductByStoreByItemcode(String store, List<String> itemcodes){
        List<Mproduct> mproducts = new ArrayList<>();
        try {
            Query query = entityManager.createNativeQuery("SELECT [pd_prodid],[pd_desc],[pd_price] from [" + store + "].[VQPBOS].[dbo].[MPRODUCT] with(nolock) WHERE pd_prodid in (:itemcode )");
//            query.setParameter("store", store);
            query.setParameter("itemcode", itemcodes);
            List<Object[]> rs = query.getResultList();
            for (Object[] obj: rs
                 ) {
                Mproduct mproduct = new Mproduct();
                mproduct.setItemcode((String) obj[0] );
                mproduct.setItemName((String) obj[1] );
                mproduct.setPrice((BigDecimal) obj[2] );
                mproducts.add(mproduct);
            }

        }catch (Exception exception){

        }
        return mproducts;
    }

    public List<Mprodplu> getProdpluByStoreByItemcode(String store,List<String> itemcodes){
        List<Mprodplu> mprodplus = new ArrayList<>();
        try {
            Query query = entityManager.createNativeQuery("SELECT pl_plucode,pl_prodid from [" + store + "].[VQPBOS].[dbo].[MPRODPLU] with(nolock) WHERE pl_prodid in (:itemcode )");
//            query.setParameter(1, store);
            query.setParameter("itemcode", itemcodes);
            List<Object[]> rs = query.getResultList();
            for (Object[] obj: rs
            ) {
               Mprodplu mprodplu = new Mprodplu();
               mprodplu.setBarcode((String) obj[0]);
               mprodplu.setItemcode((String) obj[1]);
                mprodplus.add(mprodplu);
            }
        }catch (Exception exception){

        }
        return mprodplus;
    }
}
